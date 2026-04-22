import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [
      { id: 1, title: 'YouTube Vlog #45', status: 'In Progress', date: 'Oct 24' },
      { id: 2, title: 'Real Estate Promo', status: 'Review Needed', date: 'Oct 22' },
      { id: 3, title: 'TikTok Ad Shorts', status: 'Completed', date: 'Oct 15' }
    ],
    comments: [
      { id: 1, projectId: 2, time: 12.5, text: 'Cut the awkward silence here.' }
    ]
  }),
  actions: {
    addProject(project) {
      this.projects.unshift({
        id: Date.now(), // Generate a fake ID
        ...project,
        status: 'To Do',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      })
    },
    addComment(projectId, time, text) {
      this.comments.push({
        id: Date.now(),
        projectId,
        time,
        text
      })
    }
  }
})