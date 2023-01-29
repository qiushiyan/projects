

import { z, defineCollection } from 'astro:content'
const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        image: z.string(),
        group: z.enum(['data-science', 'software', "other"]),
        date: z.date().transform((str) => new Date(str)),
        description: z.string(),
        tags: z.array(z.string()),
        link: z.string().url()
    })
})

export const collections =  {
    "project": projectCollection
}