<template>
  <div class="page">
    <div><img class="logo" alt="Profile" role="presentation" src="/profile.jpg" /></div>
    <div>
      <div class="name">George Jor</div>
      <div class="title">Reinventing the world with technology</div>
      <hr class="divider" />
      <div class="contact">
        <a
          href="mailto:yhjor@me.com"
          data-tooltip="Email"
          data-position="top center"
          data-inverted
        >
          <i class="mail icon" />
        </a>
        <span class="separator" />
        <a
          href="//github.com/yhjor"
          target="_blank"
          data-tooltip="Github"
          data-position="top center"
          data-inverted
        >
          <i class="github icon" />
        </a>
        <span class="separator" />
        <a
          href="//www.linkedin.com/in/yhjor"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="LinkedIn"
          data-position="top center"
          data-inverted
        >
          <i class="linkedin icon" />
        </a>
        <span class="separator" />
        <a
          href="//twitter.com/yhjor"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Twitter"
          data-position="top center"
          data-inverted
        >
          <i class="twitter icon" />
        </a>
        <span class="separator" />
        <a
          href="//medium.com/@yhjor"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Medium"
          data-position="top center"
          data-inverted
        >
          <i class="medium icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: Interface, sans-serif;
  margin: 0;
  background-color: black;
  color: #cccccc;
}
</style>

<style scoped>
.page {
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  filter: grayscale(90%);
  border-radius: 50%;
  width: 140px;

  display: none;

  @media (min-width: 668px) {
    margin-right: 1.5em;
    display: block;
  }
}

.name {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 0.3em;

  @media (min-width: 668px) {
    font-size: 2rem;
  }
}

.title {
  color: grey;
  margin-bottom: 0.3em;

  @media (min-width: 668px) {
    font-size: 1.2rem;
  }
}

.contact {
  color: dimgrey;
  font-size: 1.35rem;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }

  & a {
    text-decoration: none;
    color: dimgrey;
  }
}

.divider {
  margin: 1.2em 0;
}

.separator {
  padding: 0 0.5em;
}
</style>
