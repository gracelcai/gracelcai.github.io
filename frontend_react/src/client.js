import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: "26av0x4g",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: true,
	token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
