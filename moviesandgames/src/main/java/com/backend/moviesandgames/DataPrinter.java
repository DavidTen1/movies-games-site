package com.backend.moviesandgames;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

import java.nio.charset.StandardCharsets;

@Component
public class DataPrinter implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataPrinter.class);


    private final JdbcTemplate jdbcTemplate;

    public DataPrinter(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void run(String... args) throws Exception {
//        ClassPathResource resource = new ClassPathResource("seed-data.json");
//        String json = new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
//        log.info(json);


        List<Map<String, Object>> media = jdbcTemplate.queryForList("SELECT * FROM media");
        for (Map<String, Object> row : media) {
            log.info(row.toString());
        }

        List<Map<String, Object>> cast = jdbcTemplate.queryForList("SELECT * FROM media_cast");
        for (Map<String, Object> row : cast) {
            log.info(row.toString());
        }

        List<Map<String, Object>> images = jdbcTemplate.queryForList("SELECT * FROM media_description");
        for (Map<String, Object> row : images) {
            log.info(row.toString());
        }
    }
}