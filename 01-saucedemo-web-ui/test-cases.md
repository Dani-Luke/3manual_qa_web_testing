# SauceDemo — Test Cases (Тест-кейсы)

## TC-01 — Successful Login (Успешная авторизация)

**Preconditions (Предусловия):**

* Открыта страница авторизации SauceDemo.

**Test Data (Тестовые данные):**

* Username: `standard_user`
* Password: `secret_sauce`

**Steps (Шаги):**

1. В поле Username ввести значение, указанное в Test Data.
2. В поле Password ввести значение, указанное в Test Data.
3. Нажать кнопку Login.

**Expected Result (Ожидаемый результат):**
Пользователь успешно авторизован и перенаправлен в Product Catalog (каталог товаров).

---

## TC-02 — Add Product to Cart (Добавление товара в корзину)

**Preconditions (Предусловия):**

* Пользователь авторизован как `standard_user`.
* Открыт Product Catalog.

**Test Data (Тестовые данные):**

* Product: `Sauce Labs Backpack`

**Steps (Шаги):**

1. Найти товар, указанный в Test Data.
2. Нажать кнопку Add to Cart у выбранного товара.
3. Открыть Cart.

**Expected Result (Ожидаемый результат):**
Выбранный товар отображается в корзине.

---

## TC-03 — Remove Product from Cart (Удаление товара из корзины)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.

**Test Data (Тестовые данные):**

* Product: `Sauce Labs Backpack`

**Steps (Шаги):**

1. Открыть Cart.
2. Найти товар, указанный в Test Data.
3. Нажать кнопку Remove у выбранного товара.

**Expected Result (Ожидаемый результат):**
Выбранный товар удалён из корзины.

---

## TC-04 — Required First Name Validation (Валидация обязательного поля имени)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.
* Открыта страница Checkout.

**Test Data (Тестовые данные):**

* First Name: пустое значение.
* Last Name: `Test`.
* ZIP / Postal Code: `12345`.

**Steps (Шаги):**

1. Оставить поле First Name пустым.
2. В поле Last Name ввести значение, указанное в Test Data.
3. В поле ZIP / Postal Code ввести значение, указанное в Test Data.
4. Нажать кнопку Continue.

**Expected Result (Ожидаемый результат):**
Переход к следующему этапу не выполняется. Отображается сообщение о необходимости заполнить First Name.

---

## TC-05 — Required Last Name Validation (Валидация обязательного поля фамилии)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.
* Открыта страница Checkout.

**Test Data (Тестовые данные):**

* First Name: `Test`.
* Last Name: пустое значение.
* ZIP / Postal Code: `12345`.

**Steps (Шаги):**

1. В поле First Name ввести значение, указанное в Test Data.
2. Оставить поле Last Name пустым.
3. В поле ZIP / Postal Code ввести значение, указанное в Test Data.
4. Нажать кнопку Continue.

**Expected Result (Ожидаемый результат):**
Переход к следующему этапу не выполняется. Отображается сообщение о необходимости заполнить Last Name.

---

## TC-06 — Required ZIP / Postal Code Validation (Валидация обязательного поля почтового индекса)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.
* Открыта страница Checkout.

**Test Data (Тестовые данные):**

* First Name: `Test`.
* Last Name: `User`.
* ZIP / Postal Code: пустое значение.

**Steps (Шаги):**

1. В поле First Name ввести значение, указанное в Test Data.
2. В поле Last Name ввести значение, указанное в Test Data.
3. Оставить поле ZIP / Postal Code пустым.
4. Нажать кнопку Continue.

**Expected Result (Ожидаемый результат):**
Переход к следующему этапу не выполняется. Отображается сообщение о необходимости заполнить ZIP / Postal Code.

---

## TC-07 — Successful Customer Information (Успешное заполнение данных покупателя)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.
* Открыта страница Checkout.

**Test Data (Тестовые данные):**

* First Name: `Test`.
* Last Name: `User`.
* ZIP / Postal Code: `12345`.

**Steps (Шаги):**

1. В поле First Name ввести значение, указанное в Test Data.
2. В поле Last Name ввести значение, указанное в Test Data.
3. В поле ZIP / Postal Code ввести значение, указанное в Test Data.
4. Нажать кнопку Continue.

**Expected Result (Ожидаемый результат):**
Открывается Order Overview (обзор заказа) с информацией о заказе.

---

## TC-08 — Product Data on Order Overview (Проверка данных товара в обзоре заказа)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* Товар добавлен в корзину.
* Открыт Order Overview.

**Test Data (Тестовые данные):**

* Product: `Sauce Labs Backpack`.

**Steps (Шаги):**

1. Найти товар, указанный в Test Data.
2. Сравнить название товара на странице Order Overview с названием товара в Product Catalog.
3. Сравнить описание товара с описанием в Product Catalog.
4. Сравнить цену товара с ценой в Product Catalog.

**Expected Result (Ожидаемый результат):**
Название, описание и цена товара соответствуют выбранному товару.

---

## TC-09 — Order Price Calculation (Расчёт стоимости заказа)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.
* Открыт Order Overview.

**Test Data (Тестовые данные):**

* Product: `Sauce Labs Backpack`.

**Steps (Шаги):**

1. Найти выбранный товар на странице Order Overview.
2. Зафиксировать значение Item Total.
3. Зафиксировать значение Tax.
4. Зафиксировать значение Total.
5. Сравнить Total с суммой Item Total и Tax.

**Expected Result (Ожидаемый результат):**
Item Total, Tax и Total отображаются корректно, а итоговая сумма соответствует расчёту.

---

## TC-10 — Cancel Checkout (Отмена оформления заказа)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.
* Открыт Order Overview.

**Test Data (Тестовые данные):**

* Product: `Sauce Labs Backpack`.

**Steps (Шаги):**

1. Нажать кнопку Cancel.

**Expected Result (Ожидаемый результат):**
Пользователь возвращается в Product Catalog. Заказ не завершается, а товар остаётся в корзине.

---

## TC-11 — Successful Order Completion (Успешное завершение заказа)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* В корзине находится товар.
* Данные покупателя заполнены.
* Открыт Order Overview.

**Test Data (Тестовые данные):**

* Product: `Sauce Labs Backpack`.
* First Name: `Test`.
* Last Name: `User`.
* ZIP / Postal Code: `12345`.

**Steps (Шаги):**

1. Проверить информацию о выбранном товаре на странице Order Overview.
2. Проверить отображение информации о стоимости заказа.
3. Нажать кнопку Finish.

**Expected Result (Ожидаемый результат):**
Заказ успешно завершён и отображается страница Checkout Complete (подтверждение завершённого заказа).

---

## TC-12 — Product Sorting (Сортировка товаров)

**Preconditions (Предусловия):**

* Пользователь авторизован.
* Открыт Product Catalog.

**Test Data (Тестовые данные):**

* Sorting options (варианты сортировки):

  * Name A-Z.
  * Name Z-A.
  * Price low to high.
  * Price high to low.

**Steps (Шаги):**

1. Открыть список сортировки.
2. Выбрать вариант сортировки, указанный в Test Data.
3. Проверить порядок отображения товаров.
4. Повторить проверку для каждого варианта сортировки из Test Data.

**Expected Result (Ожидаемый результат):**
Товары отображаются в соответствии с выбранным вариантом сортировки:

* Name A-Z — по имени от A до Z.
* Name Z-A — по имени от Z до A.
* Price low to high — по возрастанию цены.
* Price high to low — по убыванию цены.
