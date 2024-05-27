package org.example;

import org.example.Client;
import org.example.Server;

public class Main {

    public static void main(String[] args) {

        /* manual:
            for running server application uncomment server part,
            for client app uncomment client part
        */

        Server server = new Server(8080);
        Server newServer = new Server(8081);
//        Client client = new Client("localhost",8080);
    }
}