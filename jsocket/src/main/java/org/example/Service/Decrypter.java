package org.example.Service;

public class Decrypter {

    public String decryptedMessage = new String();
    public Decrypter(String encryptedMessage){
        for (int i=0;i<encryptedMessage.length();i++){
            if (encryptedMessage.charAt(i) != '#')
                decryptedMessage += encryptedMessage.charAt(i);
        }
    }
}
