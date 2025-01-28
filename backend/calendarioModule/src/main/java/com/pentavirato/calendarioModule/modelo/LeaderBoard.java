package com.pentavirato.calendarioModule.modelo;

import java.util.ArrayList;
import java.util.Date;

public class LeaderBoard {
    private int id;
    private Competition competition;
    private Date lastUpdate;
    private ArrayList<Match> resultList = new ArrayList<>();
}
