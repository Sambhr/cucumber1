package pageobjectmodel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Pageclass {
		WebDriver driver;
		By lnc= By.linkText("Log in");
		By uname=By.name("Email");
		By pwd=By.name("Password");
		By lin=By.xpath("/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[5]/input");
		By lout=By.linkText("Log out");
		public Pageclass(WebDriver driver) {
			this.driver=driver;
		}
		public void clicklink() {
			driver.findElement(lnc).click();
		}
		public void typeuname(String username) {
			driver.findElement(uname).sendKeys("sambhramalokanath013@gmail.com");
		}
		public void typepwd(String password) {
			driver.findElement(pwd).sendKeys("Sambhrama009");
		}
		public void clickonlogin() {
			driver.findElement(lin).click();
		}
		public void clickonlogout() {
			driver.findElement(lout).click();
		}

		}
