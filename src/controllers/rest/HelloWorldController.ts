import {Controller} from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import {Any, Enum, Post, Required, Returns} from "@tsed/schema";

export enum BarEnum {
	Bar1 = "bar1",
	Bar2 = "bar2"
}

export class Foo {
  // @Any('string', 'null') // alternative
	@Required(true, null)
	@Enum(BarEnum)
	// @Enum(BarEnum, null) // don't want this but works
	public bar: BarEnum | null;
}

@Controller("/hello-world")
export class HelloWorldController {
	@Post("/")
	@Returns(200)
	public getCalcResult(@Required() @BodyParams("foo") foo: Foo): string {
    return "ok";
  }
}
