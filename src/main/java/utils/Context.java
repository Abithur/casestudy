package utils;

public class Context {
    private static Context instance = null;

    public static Context getInstance() {
        if (instance == null) {
            instance = new Context();
        }
        return instance;
    }

    public String productContent = null;
}
