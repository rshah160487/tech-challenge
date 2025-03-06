export class Helpers {
    // Wait for a specific timeout
    static async waitForTimeout(page, timeout) {
      await page.waitForTimeout(timeout);
    }
  
    // Generate a random string
    static generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  }