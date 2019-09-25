package pageobjectmodel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Testcase_pom {
public static void main(String[] args) {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_B6B.01.16\\Desktop\\browser_drivers\\chromedriver_win32\\chromedriver.exe");
	WebDriver driver=new ChromeDriver();
	Pageclass PObject=new Pageclass(driver);
	driver.get("http://demowebshop.tricentis.com/");
	driver.manage().window().maximize();
	PObject.clicklink();
	String username=null;
	PObject.typeuname(username);
	String password=null;
	PObject.typepwd(password);
	PObject.clickonlogin();
	System.out.println("Title of the page is "+driver.getTitle());
	PObject.clickonlogout();
}
}
