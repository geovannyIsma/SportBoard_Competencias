package com.pentavirato.calendarioModule.modelo;

public class PlayingField {
    private Integer id;
    private String name;
    private Address address;

    public PlayingField() {
    }

    public PlayingField(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
