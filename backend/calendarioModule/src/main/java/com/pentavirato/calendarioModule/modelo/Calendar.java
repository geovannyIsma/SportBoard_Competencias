package com.pentavirato.calendarioModule.modelo;

import java.util.ArrayList;

public class Calendar {
    private Integer id;
    private Competition competition;
    private ArrayList<Round> rounds = new ArrayList<>();

    public Competition getCompetition() {
        return competition;
    }

    public void setCompetition(Competition competition) {
        this.competition = competition;
    }

    public ArrayList<Round> getRounds() {
        return rounds;
    }

    public void setRounds(ArrayList<Round> rounds) {
        this.rounds = rounds;
    }
}
