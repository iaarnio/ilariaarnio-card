const CliTest = require("command-line-test");

describe("test", function() {
  it("build and run should be ok", async done => {
    const cliTest = new CliTest();
    const res = await cliTest.exec("npm run dev");

    expect(res.error).toBeNull();
    expect(res.stderr).toMatch("");

    expect(res.stdout).toMatch(/https:\/\/github.com\/iaarnio/);
    expect(res.stdout).toMatch(/npx @aarnila\/card/);

    done();
  });
});
