package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= "feature\\new.feature",glue= {"Step_definition"},plugin= {"html:target/cucumber.html"})
public class runner01 {
	
}
