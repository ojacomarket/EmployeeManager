package com.reddit.clone.model;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
public class Employee implements Serializable {
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String phone;
    private String imgURL;
    private String employeeCode;

}
