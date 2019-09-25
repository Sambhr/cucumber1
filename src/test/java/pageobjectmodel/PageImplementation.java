package pageobjectmodel;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

public class PageImplementation {
@Test
public static void main (String args[])
{
System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_B6B.01.16\\Desktop\\browser_drivers\\chromedriver_win32\\chromedriver.exe");
WebDriver driver=new ChromeDriver();
driver.get("http://demowebshop.tricentis.com/");
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
Pageclass1 locateElements=PageFactory.initElements(driver, Pageclass1.class);
locateElements.loginMethod("sambhramalokanath013@gmail.com", "Sambhrama009");
	}
}
