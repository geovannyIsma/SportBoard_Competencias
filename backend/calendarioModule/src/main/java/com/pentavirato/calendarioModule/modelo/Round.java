package com.pentavirato.calendarioModule.modelo;

import java.util.ArrayList;
import java.util.Date;

public class Round {
    private Integer id;
    private Date startDate;
    private Date finishDate;
    private ArrayList<Match> matches = new ArrayList<>();

    public Round() {
    }

    public Round(Date startDate, Date finishDate) {
        this.startDate = startDate;
        this.finishDate = finishDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }
}
