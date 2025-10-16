<template>
  <div class="min-h-screen bg-background p-8">
    <div class="mx-auto max-w-4xl space-y-8">
      <!-- Header -->
      <div class="space-y-2">
        <h1 class="text-4xl font-bold tracking-tight">
          shadcn-vue with Nuxt 4
        </h1>
        <p class="text-lg text-muted-foreground">
          shadcn-vue component library demo page
        </p>
      </div>

      <!-- Button samples -->
      <UiCard>
        <UiCardHeader>
          <UiCardTitle>Button Components</UiCardTitle>
          <UiCardDescription>
            Various button style examples
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <div class="flex flex-wrap gap-4">
            <UiButton>Default</UiButton>
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="destructive">Destructive</UiButton>
            <UiButton variant="outline">Outline</UiButton>
            <UiButton variant="ghost">Ghost</UiButton>
            <UiButton variant="link">Link</UiButton>
          </div>
        </UiCardContent>
      </UiCard>

      <!-- Form input samples -->
      <UiCard>
        <UiCardHeader>
          <UiCardTitle>Form Components</UiCardTitle>
          <UiCardDescription>
            Form example using Label and Input
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <div class="space-y-4">
            <div class="space-y-2">
              <UiLabel for="email">Email</UiLabel>
              <UiInput
                id="email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div class="space-y-2">
              <UiLabel for="password">Password</UiLabel>
              <UiInput
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <UiButton class="w-full">Sign In</UiButton>
          </div>
        </UiCardContent>
      </UiCard>

      <!-- Card grid samples -->
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <UiCard>
          <UiCardHeader>
            <UiCardTitle>Card 1</UiCardTitle>
            <UiCardDescription>
              First card example
            </UiCardDescription>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm text-muted-foreground">
              This card uses shadcn-vue's Card component.
            </p>
          </UiCardContent>
          <UiCardFooter>
            <UiButton variant="outline" class="w-full">
              Learn More
            </UiButton>
          </UiCardFooter>
        </UiCard>

        <UiCard>
          <UiCardHeader>
            <UiCardTitle>Card 2</UiCardTitle>
            <UiCardDescription>
              Second card example
            </UiCardDescription>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm text-muted-foreground">
              Arranged in a responsive grid layout.
            </p>
          </UiCardContent>
          <UiCardFooter>
            <UiButton variant="outline" class="w-full">
              Learn More
            </UiButton>
          </UiCardFooter>
        </UiCard>

        <UiCard>
          <UiCardHeader>
            <UiCardTitle>Card 3</UiCardTitle>
            <UiCardDescription>
              Third card example
            </UiCardDescription>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm text-muted-foreground">
              Styled using Tailwind CSS.
            </p>
          </UiCardContent>
          <UiCardFooter>
            <UiButton variant="outline" class="w-full">
              Learn More
            </UiButton>
          </UiCardFooter>
        </UiCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nuxt uses auto-import, so no need to manually import components
</script>
