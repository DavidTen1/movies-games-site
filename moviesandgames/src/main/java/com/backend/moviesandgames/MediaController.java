package com.backend.moviesandgames;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/media")
@CrossOrigin(origins = "http://localhost:5173")
public class MediaController {

    private final MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @GetMapping
    public List<MediaDto> getAllMedia() {
        return mediaService.getAllMedia();
    }
}
