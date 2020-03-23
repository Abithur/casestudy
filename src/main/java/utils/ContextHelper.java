package utils;

public class ContextHelper {
    static Context context = Context.getInstance();

    public static void setProductContent(String productContent) {
        context.productContent = productContent;
    }

    public static String getProductContent() {
        return context.productContent;
    }
}
