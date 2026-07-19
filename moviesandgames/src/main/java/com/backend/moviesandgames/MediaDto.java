package com.backend.moviesandgames;

import java.util.List;

public record MediaDto(
        Long id,
        String type,
        String title,
        Integer releaseYear,
        String director,
        List<String> genre,
        List<String> writer,
        List<CastMember> cast,
        List<String> platform,
        String description,
        Double rating
) {
    public record CastMember(String name, String role) {}
}
