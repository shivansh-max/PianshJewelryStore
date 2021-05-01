package com.piansh.PianshJewelryStoreRestApi.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// This is a config that will allow me to call the api and disable the api for a everyone except me.
@Configuration
public class Cors {

    @Bean
    public WebMvcConfigurer corsConfigure() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("DELETE","GET","POST","PUT")
                        .allowedHeaders("*")
                        .allowedOrigins("*");
            }
        };
    }
}

