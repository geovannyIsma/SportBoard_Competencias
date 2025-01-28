package com.pentavirato.calendarioModule.modelo;

public class Team {
    private Integer id;
    private String name;

    public Team() {
    }

    public Team(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
