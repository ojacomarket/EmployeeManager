package com.reddit.clone.model;

import java.io.Serializable;

/**
 * Why we use "implements Serializable" here? Is because our Employee class will be used as Entity in
 * Database, therefore we have to pass back and forth around our application and it is much easier
 * to be done via Stream API. So Serializable makes a possibility for a class to act as Stream also.
 */
public class Employee implements Serializable {
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String phone;
    private String imgURL;
    private String employeeCode;

}
