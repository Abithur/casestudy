$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/add-product-to-basket.feature");
formatter.feature({
  "line": 1,
  "name": "Execute basket tests",
  "description": "",
  "id": "execute-basket-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5964964573,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 78\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027C02YM67HLVCG\u0027, ip: \u0027fe80:0:0:0:14a9:f9cd:13cd:fe09%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010ed97e99 chromedriver + 3747481\n1   chromedriver                        0x000000010ed2c4d3 chromedriver + 3306707\n2   chromedriver                        0x000000010eabbfef chromedriver + 749551\n3   chromedriver                        0x000000010ea1d9db chromedriver + 100827\n4   chromedriver                        0x000000010ea19ad1 chromedriver + 84689\n5   chromedriver                        0x000000010ea47f97 chromedriver + 274327\n6   chromedriver                        0x000000010ea45163 chromedriver + 262499\n7   chromedriver                        0x000000010ea1fb0d chromedriver + 109325\n8   chromedriver                        0x000000010ea20aa5 chromedriver + 113317\n9   chromedriver                        0x000000010ed5af7f chromedriver + 3497855\n10  chromedriver                        0x000000010ed67b7d chromedriver + 3550077\n11  chromedriver                        0x000000010ed67908 chromedriver + 3549448\n12  chromedriver                        0x000000010ed3a029 chromedriver + 3362857\n13  chromedriver                        0x000000010ed683d8 chromedriver + 3552216\n14  chromedriver                        0x000000010ed4ea37 chromedriver + 3447351\n15  chromedriver                        0x000000010ed7df94 chromedriver + 3641236\n16  chromedriver                        0x000000010ed9dc87 chromedriver + 3771527\n17  libsystem_pthread.dylib             0x00007fff681d1e65 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff681cd83b thread_start + 15\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utils.Util.launchChrome(Util.java:33)\n\tat stepdefs.Hooks.setup(Hooks.java:20)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\n\tat org.testng.TestRunner.run(TestRunner.java:589)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\n\tat org.testng.TestNG.run(TestNG.java:1000)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:145)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:109)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Login hepsiburada and add products to basket",
  "description": "",
  "id": "execute-basket-tests;login-hepsiburada-and-add-products-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User visits Hepsiburada",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logins to system",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User checks if login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User searches the product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User adds products to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User checks if products have been added to basket successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BasketSteps.userVisitsHepsiburada()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userLoginsToSystem()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userChecksIfLoginSuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userSearchesTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userAddsProductsToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userChecksIfProductsHaveBeenAddedToBasketSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 980900,
  "error_message": "java.lang.NullPointerException\n\tat stepdefs.Hooks.teardownScenario(Hooks.java:25)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\n\tat org.testng.TestRunner.run(TestRunner.java:589)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\n\tat org.testng.TestNG.run(TestNG.java:1000)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:145)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:109)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.before({
  "duration": 1056040526,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 78\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027C02YM67HLVCG\u0027, ip: \u0027fe80:0:0:0:14a9:f9cd:13cd:fe09%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010e30be99 chromedriver + 3747481\n1   chromedriver                        0x000000010e2a04d3 chromedriver + 3306707\n2   chromedriver                        0x000000010e02ffef chromedriver + 749551\n3   chromedriver                        0x000000010df919db chromedriver + 100827\n4   chromedriver                        0x000000010df8dad1 chromedriver + 84689\n5   chromedriver                        0x000000010dfbbf97 chromedriver + 274327\n6   chromedriver                        0x000000010dfb9163 chromedriver + 262499\n7   chromedriver                        0x000000010df93b0d chromedriver + 109325\n8   chromedriver                        0x000000010df94aa5 chromedriver + 113317\n9   chromedriver                        0x000000010e2cef7f chromedriver + 3497855\n10  chromedriver                        0x000000010e2dbb7d chromedriver + 3550077\n11  chromedriver                        0x000000010e2db908 chromedriver + 3549448\n12  chromedriver                        0x000000010e2ae029 chromedriver + 3362857\n13  chromedriver                        0x000000010e2dc3d8 chromedriver + 3552216\n14  chromedriver                        0x000000010e2c2a37 chromedriver + 3447351\n15  chromedriver                        0x000000010e2f1f94 chromedriver + 3641236\n16  chromedriver                        0x000000010e311c87 chromedriver + 3771527\n17  libsystem_pthread.dylib             0x00007fff681d1e65 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff681cd83b thread_start + 15\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utils.Util.launchChrome(Util.java:33)\n\tat stepdefs.Hooks.setup(Hooks.java:20)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\n\tat org.testng.TestRunner.run(TestRunner.java:589)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\n\tat org.testng.TestNG.run(TestNG.java:1000)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:145)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:109)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Add drone part to the basket without login",
  "description": "",
  "id": "execute-basket-tests;add-drone-part-to-the-basket-without-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User visits Hepsiburada",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User navigates to electronic parts page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User adds drone part to basket",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User checks if product have been added to basket successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BasketSteps.userVisitsHepsiburada()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userNavigatesToElectronicPartsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userAddsDronePartToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BasketSteps.userChecksIfProductHaveBeenAddedToBasketSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 102054,
  "error_message": "java.lang.NullPointerException\n\tat stepdefs.Hooks.teardownScenario(Hooks.java:25)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\n\tat org.testng.TestRunner.run(TestRunner.java:589)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\n\tat org.testng.TestNG.run(TestNG.java:1000)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:145)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:109)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
});