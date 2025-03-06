export class Reporter {
    static logTestResults(results) {
      console.log('📊 Test Results Summary:');
      console.log(`✅ Tests Executed: ${results.total}`);
      console.log(`🟢 Tests Passed: ${results.passed}`);
      console.log(`🔴 Tests Failed: ${results.failed}`);
      if (results.failed > 0) {
        console.log('❌ Failed Tests:');
        results.failures.forEach((failure) => {
          console.log(`- ${failure.title}`);
        });
      }
    }
  }