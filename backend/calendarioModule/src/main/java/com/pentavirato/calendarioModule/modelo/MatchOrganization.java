package com.pentavirato.calendarioModule.modelo;

import java.util.ArrayList;
import java.util.Date;

public class MatchOrganization {
    private int id;
    private Date date;
    private String phase;
    private Method method;
    private LeaderBoard positionTable;
    private Competition competition;
    private ArrayList<Team> activeTeams = new ArrayList<>();
    private ArrayList<Match> matches = new ArrayList<>();

    public MatchOrganization() {
    }


}
