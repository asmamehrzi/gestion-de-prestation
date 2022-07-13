package com.example.demo.sec;

import javax.servlet.http.PushBuilder;

public class JWTUtil {
    public  static  final String SECRET="mySecret";
    public  static final String AUTH_HEADER="Authorization";
    public static final long EXPIRE_ACCESS_TOKEN=2*60*1000;
    public static final long EXPIRE_REFRESH_TOKEN=2*60*1000;
    public static final String PREFIX="Bearer ";

}
