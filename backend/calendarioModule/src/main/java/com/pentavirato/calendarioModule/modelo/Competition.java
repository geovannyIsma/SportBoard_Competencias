package com.pentavirato.calendarioModule.modelo;

import java.util.ArrayList;
import java.util.Date;

public class Competition {
    private int id;
    private String name;
    private String type;
    private Date startDate;
    private ArrayList<MatchOrganization> matchOrganizations = new ArrayList<>();
}
