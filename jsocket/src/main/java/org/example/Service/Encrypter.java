package org.example.Service;

public class Encrypter {
    public String Encrypter(String message){
        String encryptedMessage = new String();
        for (int i=0;i<message.length();i++){
            encryptedMessage += message.charAt(i) + "#";
        }
        return encryptedMessage;
    }
}
