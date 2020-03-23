import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = "stepdefs",
        features = "src/main/resources/features",
        monochrome = false,
        plugin = {"pretty",
                "html:target/TestReport",
                "json:target/TestReport.json",},
        strict = false,
        tags = {}
)

public class CucumberRunner {
}
