/* eslint-disable camelcase */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (body && (!body.organization || !body.repository)) {
    return {
      error: 'No body',
    }
  }
  const token = useRuntimeConfig().githubToken
  const data = await $fetch(`https://api.github.com/repos/${body.organization}/${body.repository}`, {
    method: 'GET',
    retry: 3,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!data) {
    return null
  }
  const { stargazers_count, forks } = <any>data
  return {
    stargazers_count,
    forks,
  }
})
