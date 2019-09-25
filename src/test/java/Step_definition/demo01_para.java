package Step_definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class demo01_para {
	WebDriver driver=null;
	@Given("^User opens the application$")
	public void user_opens_the_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_B6B.01.16\\Desktop\\browser_drivers\\chromedriver_win32\\chromedriver.exe");
	     driver = new ChromeDriver();
	     driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	     driver.manage().window().maximize();
	}

	@When("^user click on signin link$")
	public void user_click_on_signin_link() throws Throwable {
		driver.findElement(By.linkText("SignIn")).click();
	}

	@When("^user enters \"([^\"]*)\" as a username and \"([^\"]*)\"$")
	public void user_enters_as_a_username_and(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("userName")).sendKeys(arg1);
		 driver.findElement(By.id("password")).sendKeys(arg2);
	}

	@Then("^Message displayed login successfully$")
	public void message_displayed_login_successfully() throws Throwable {
		driver.findElement(By.name("Login")).click();
		  System.out.println("Title of the page is "+driver.getTitle());
	}

}
