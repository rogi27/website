<script lang="ts" setup>
import { useSkillsStore } from '@/store/skills'
import { NuxtLink } from '#components'

const { t, locale } = useI18n()

const skills: any = useSkillsStore().$state

const skillsList = {
  primary: {
    skills: ['js', 'ts', 'nuxt', 'vue', 'scss', 'tailwind'],
  },
  secondary: {
    skills: ['java', 'nest', 'mongodb', 'mysql'],
  },
  assistive: {
    skills: ['kotlin', 'preact', 'figma', 'vscode'],
  },
}

const expList = [
  {
    type: 'work',
    name: 'ctm',
    logo: '/ctm.svg',
    dateJoined: 2021,
    dateLeft: 2021,
    usedSkills: ['css', 'figma'],
  },
  {
    type: 'work',
    name: 'premid',
    logo: '/premid.webp',
    dateJoined: 2019,
    dateLeft: 2020,
    usedSkills: ['ts', 'nuxt', 'scss', 'tailwind'],
  },
  {
    type: 'award',
    name: 'ws_ix',
    date: 2021,
  },
  {
    type: 'award',
    name: 'ws_viii',
    date: 2019,
  },
  {
    type: 'certificate',
    name: 'htmlacademynode',
    issuer: 'htmlacademy',
    date: 2023,
    link:
      'https://assets.htmlacademy.ru/certificates/intensive/463/2284645.pdf?1676649687',
  },
]

const contacts = [
  {
    name: 'Telegram',
    style: '!bg-sky-400/20',
    icon: 'tabler:brand-telegram',
    link: '#',
  },
  {
    name: 'Discord',
    style: '!bg-purple-400/20',
    icon: 'tabler:brand-discord',
    link: 'https://htmlacademy.ru/',
  },
  {
    name: 'Email',
    icon: 'tabler:mail',
    link: 'mailto:27rogi@pm.me',
  },
]

definePageMeta({
  metadataKey: 'resume',
})
</script>

<template>
  <div class="resume">
    <div class="resume__header">
      <div class="resume__title">
        <h1>{{ t("page.resume.header.name") }}</h1>
        <i18n-t
          keypath="page.resume.header.about.text"
          tag="p"
        >
          <template #diploma>
            <span>{{ t("page.resume.header.about.diploma") }}</span>
          </template>
          <template #specialty>
            <span>{{ t("page.resume.header.about.specialty") }}</span>
          </template>
          <template #qualification>
            <span>{{ t("page.resume.header.about.qualification") }}</span>
          </template>
        </i18n-t>
      </div>
      <div class="resume__face">
        <nuxt-img
          height="200px"
          width="200px"
          preset="optimized"
          src="/face.jpg"
        />
      </div>
    </div>
    <div class="resume__skills">
      <div
        v-for="(list, key) in skillsList"
        :key="key"
        class="resume__skill-list"
      >
        <p class="skill-list__name">
          {{ t(`page.resume.skills.${key}`) }}
        </p>
        <div
          class="skill-list__items"
          :class="{
            'skill-list__items--four': list.skills.length === 4,
          }"
        >
          <template
            v-for="(skill, a) of list.skills"
            :key="a"
          >
            <IconBlock
              class="!bg-opacity-20"
              :class="skills[skill].color"
              :title="skills[skill].name"
              :icon="skills[skill].icon"
            />
          </template>
        </div>
      </div>
    </div>
    <div class="resume__experience">
      <h2>{{ t("page.resume.experiences.title") }}</h2>
      <div class="resume__items">
        <template
          v-for="(expItem, i) in expList"
          :key="i"
        >
          <div
            v-if="expItem.type === 'work'"
            class="expcard"
          >
            <div class="expcard__content">
              <div class="expcard__header">
                <h3>
                  {{ t(`page.resume.experiences.items.${expItem.name}.title`) }}
                  <span>({{ expItem.dateJoined }} - {{ expItem.dateLeft }})</span>
                </h3>
                <p>{{ t(`page.resume.experiences.items.${expItem.name}.role`) }}</p>
              </div>
            </div>
            <nuxt-img
              class="expcard__logo"
              preset="optimized"
              :src="expItem.logo"
            />
          </div>
          <div
            v-if="expItem.type === 'award'"
            class="expcard expcard--award"
          >
            <div class="expcard__content">
              <div class="expcard__header">
                <h3>{{ t(`page.resume.experiences.items.${expItem.name}.title`) }}</h3>
                <i18n-t
                  keypath="page.resume.experiences.year"
                  tag="p"
                >
                  <template #year>
                    <span>{{ expItem.date }}</span>
                  </template>
                </i18n-t>
              </div>
            </div>
            <Icon
              class="expcard__logo expcard__logo--icon"
              name="tabler:award"
            />
          </div>
          <NuxtLink
            v-if="expItem.type === 'certificate'"
            :to="expItem.link"
            class="expcard expcard--certificate"
          >
            <div class="expcard__content">
              <div class="expcard__header">
                <h3>{{ t(`page.resume.experiences.items.${expItem.name}.title`) }} <span>({{ expItem.date }})</span></h3>
                <i18n-t
                  keypath="page.resume.experiences.issuedBy"
                  tag="p"
                >
                  <template #issuer>
                    <span>{{ expItem.issuer }}</span>
                  </template>
                </i18n-t>
              </div>
            </div>
            <Icon
              class="expcard__logo expcard__logo--icon"
              name="tabler:certificate"
            />
          </NuxtLink>
        </template>
      </div>
    </div>
    <div class="resume__details">
      <h2>{{ t("page.resume.additional.title") }}</h2>
      <div class="resume__items resume__items--details">
        <div class="detail">
          <div class="detail__header">
            <Icon name="tabler:files" />
            <h3>{{ t("page.resume.additional.files") }}</h3>
          </div>
          <div class="resume__items">
            <IconBlock
              is-link
              :to="`/resume_${locale}.pdf`"
              title="Резюме (PDF)"
              class="!bg-villa-green-500/40"
              icon="tabler:file-description"
            />
          </div>
        </div>
        <div class="detail">
          <div class="detail__header">
            <Icon name="tabler:abc" />
            <h3>{{ t("page.resume.additional.languages") }}</h3>
          </div>
          <div class="resume__items">
            <IconBlock
              title="Русский"
              icon="flag:ru-1x1"
            />
            <IconBlock
              title="English"
              icon="flag:us-1x1"
            />
          </div>
        </div>
        <div class="detail">
          <div class="detail__header">
            <Icon name="tabler:social" />
            <h3>{{ t("page.resume.additional.contacts") }}</h3>
          </div>
          <div class="resume__items">
            <IconBlock
              v-for="(contact, i) of contacts"
              :key="i"
              :class="contact.style"
              :title="contact.name"
              :icon="contact.icon"
              :to="contact.link"
              is-link
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume {
  @apply flex flex-col mx-auto px-4 gap-6 md:py-4;
  .resume__header {
    @apply flex flex-col-reverse gap-4 items-start md:flex-row md:items-center;
    .resume__title {
      @apply flex flex-col gap-2;
      h1 {
        @apply font-headline font-extrabold text-3xl md:text-5xl;
        span {
          @apply text-gray-400/50;
        }
      }
      p {
        @apply font-semibold text-base text-gray-400 md:text-xl;
        span {
          @apply text-villa-green-500;
        }
      }
    }
    .resume__face {
      @apply flex border-gray-200/10 flex-shrink-0 overflow-hidden md:ml-auto;
      img {
        @apply rounded-xl h-32 w-32 md:h-auto md:ml-auto md:w-auto;
      }
    }
  }
  .resume__skills {
    @apply grid gap-2 lg:grid-cols-3;
    .resume__skill-list {
      @apply border rounded-md flex flex-col bg-gray-800/20 border-gray-200/10 p-4 gap-2 col-span-1;
      .skill-list__name {
        @apply font-headline font-extrabold text-xl;
      }
      .skill-list__items {
        @apply flex flex-row flex-wrap gap-2;
        &--four {
          .iconblock {
            @apply flex-[33%];
          }
        }
      }
    }
  }
  .resume__experience {
    @apply flex flex-col gap-4;
    h2 {
      @apply font-headline font-extrabold text-3xl;
    }
    .expcard {
      @apply border rounded-md flex flex-row bg-gray-800/20 border-gray-200/10 flex-[100%] p-4 gap-4 col-span-1 items-center lg:flex-[32%];
      &__logo {
        @apply rounded-md ml-auto min-w-16 max-w-16 overflow-hidden;
        &--icon {
          @apply h-16;
        }
      }
      &__content {
        @apply flex flex-col gap-2;
        .expcard__header {
          h3 {
            @apply font-extrabold font-headline text-xl;
          }
          p {
            @apply font-bold text-base text-gray-200/70;
          }
          span {
            @apply text-villa-green-500;
          }
        }
      }
    }
  }

  .resume__details {
    @apply flex flex-col gap-4;
    h2 {
      @apply font-headline font-extrabold text-3xl;
    }
    .detail {
      @apply border rounded-md flex flex-col bg-gray-800/20 border-gray-200/10 flex-[32%] p-4 gap-2 col-span-1;
      .detail__header {
        @apply flex flex-row gap-2 items-start;
        h3 {
          @apply font-extrabold font-headline text-xl;
        }
        .icon {
          @apply text-2xl;
        }
      }
      p {
        @apply font-bold text-base text-gray-200/70;
      }
      span {
        @apply text-villa-green-500;
      }
    }
  }

  .resume__items {
    @apply flex flex-row flex-wrap gap-2 items-stretch;
    &--details {
      @apply flex-col lg:flex-row;
    }
  }
}
</style>
