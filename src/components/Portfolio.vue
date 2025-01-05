<template>
    <section id="portfolio" class="p-8">
        <h2 class="section-title">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div v-for="project in projects" :key="project.id" class="bg-white shadow-md rounded-lg p-4">
                <img :src="project.image" :alt="project.name" class="w-full rounded" />
                <h3 class="text-lg font-bold mt-4">{{ project.name }}</h3>
                <p class="text-sm text-gray-600">{{ project.description }}</p>
                <a :href="project.link" target="_blank" class="btn btn-primary mt-4 inline-block">View Project</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Project 1',
                    description: 'Description of project 1',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                },
                {
                    id: 2,
                    name: 'Project 2',
                    description: 'Description of project 2',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                },
                {
                    id: 3,
                    name: 'Project 3',
                    description: 'Description of project 3',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                },
            ],
        };
    },
};
</script>