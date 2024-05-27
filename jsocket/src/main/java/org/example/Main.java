package org.example;

import org.example.Socket.*;
import org.example.Service.*;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        /* manual:
            for running server application uncomment server part,
            for client app uncomment client part
        */

//        Server server = new Server(8080);
//        Client client = new Client("localhost",8080);


        /* manual for encrypting:
        *   use as below
        *
        * */
//        Encrypter msg = new Encrypter("hello");
//        String emsg = msg.encryptedMessage;
//        System.out.println(emsg);

//        Decrypter nmsg = new Decrypter(emsg);
//        System.out.println(nmsg.dmsg);


        Scanner input = new Scanner(System.in);
        System.out.println("Enter your message: ");
        String mainMessage = input.nextLine();
        Encrypter msg = new Encrypter(mainMessage);
        System.out.println(msg.encryptedMessage);
        //ok

        Decrypter dmsg = new Decrypter(msg.encryptedMessage);
        System.out.println(dmsg.decryptedMessage);
        //ok
    }
}