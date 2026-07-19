package com.backend.moviesandgames;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MediaService {

    private final JdbcTemplate jdbcTemplate;

    public MediaService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<MediaDto> getAllMedia() {
        List<Map<String, Object>> mediaRows = jdbcTemplate.queryForList("SELECT * FROM media");

        Map<Long, List<String>> genres = groupStrings("SELECT media_id, genre FROM media_genre", "GENRE");
        Map<Long, List<String>> writers = groupStrings("SELECT media_id, writer FROM media_writer", "WRITER");
        Map<Long, List<String>> platforms = groupStrings("SELECT media_id, platform FROM media_platform", "PLATFORM");
        Map<Long, List<MediaDto.CastMember>> castByMedia = new HashMap<>();

        Map<Long, String> descriptions = new HashMap<>();
        for (Map<String, Object> row : jdbcTemplate.queryForList("SELECT media_id, description FROM media_description")) {
            Long mediaId = ((Number) row.get("MEDIA_ID")).longValue();
            descriptions.put(mediaId, (String) row.get("DESCRIPTION"));
        }

        for (Map<String, Object> row : jdbcTemplate.queryForList("SELECT * FROM media_cast")) {
            Long mediaId = ((Number) row.get("MEDIA_ID")).longValue();
            castByMedia.computeIfAbsent(mediaId, id -> new ArrayList<>())
                    .add(new MediaDto.CastMember((String) row.get("ACTOR_NAME"), (String) row.get("ROLE_NAME")));
        }

        List<MediaDto> result = new ArrayList<>();
        for (Map<String, Object> row : mediaRows) {
            Long id = ((Number) row.get("ID")).longValue();
            Number releaseYear = (Number) row.get("RELEASE_YEAR");
            Number rating = (Number) row.get("RATING");

            result.add(new MediaDto(
                    id,
                    (String) row.get("TYPE"),
                    (String) row.get("TITLE"),
                    releaseYear != null ? releaseYear.intValue() : null,
                    (String) row.get("DIRECTOR"),
                    genres.getOrDefault(id, List.of()),
                    writers.getOrDefault(id, List.of()),
                    castByMedia.getOrDefault(id, List.of()),
                    platforms.getOrDefault(id, List.of()),
                    descriptions.get(id),
                    rating != null ? rating.doubleValue() : null
            ));
        }
        return result;
    }

    private Map<Long, List<String>> groupStrings(String sql, String column) {
        Map<Long, List<String>> map = new HashMap<>();
        for (Map<String, Object> row : jdbcTemplate.queryForList(sql)) {
            Long mediaId = ((Number) row.get("MEDIA_ID")).longValue();
            map.computeIfAbsent(mediaId, id -> new ArrayList<>()).add((String) row.get(column));
        }
        return map;
    }
}