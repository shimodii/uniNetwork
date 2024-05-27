package org.example.Service;

public class Encrypter {

    public String encryptedMessage = new String();
    public Encrypter(String message){
        for (int i=0;i<message.length();i++){
            encryptedMessage += message.charAt(i) + "#";
        }
    }
}
