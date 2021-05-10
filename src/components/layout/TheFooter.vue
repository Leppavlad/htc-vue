<template>
  <footer class="footer">
    <div class="container">
      <div class="wrapper">
        <a href="https://htc-cs.ru" rel="noopener" target="_blank" class="logo">
          <img src="@/assets/logo-company.svg" alt="" />
        </a>
        <div class="contacts">
          <p>
            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
            246 (ДК «Металлург»)
          </p>
          <p>
            <a href="tel:+73412938861">+7 (3412) 93-88-61</a>,
            <a href="tel:+3412432929">43-29-29</a>
          </p>
          <a href="https://htc-cs.ru" rel="noopener" target="_blank"
            >htc-cs.ru</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #f2f2f2;
  padding: 20px 0;
}

.logo {
  width: 32px;
  margin-right: 40px;

  @media screen and (max-width: 320px) {
    display: none;
  }
}

.wrapper {
  display: flex;
  align-items: flex-end;
}

p {
  margin: 6px 0;
}
</style>
