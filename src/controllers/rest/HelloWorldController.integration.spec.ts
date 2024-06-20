import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { BarEnum, Foo, HelloWorldController } from "./HelloWorldController";
import { Server } from "../../Server";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [HelloWorldController]
    }
  }));
  afterEach(PlatformTest.reset);

  it("should call POST /hello-world", async () => {
    const request = SuperTest(PlatformTest.callback());
    const fooObj = new Foo();
    //  fooObj.bar = BarEnum.Bar1; // works
    fooObj.bar = null; // should work but doesn't work
    const payload = {"foo": fooObj};
    const response = await request.post("/hello-world").send(payload).expect(200);

     expect(response.text).toEqual("ok");
  });
});
