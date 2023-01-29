import { z, defineCollection } from 'astro:content'

const randomImage = "https://source.unsplash.com/500x300?tech"

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        image: z.string().default(randomImage),
        group: z.enum(['data-science', 'software', "other"]),
        date: z.date().transform((str) => new Date(str)).default(new Date()),
        description: z.string(),
        tags: z.array(z.string()).default([]),
        link: z.string().url().optional()
    })
})

export const collections =  {
    "project": projectCollection
}