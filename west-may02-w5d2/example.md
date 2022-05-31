# Morning Beverages

- Rum & Code - Glass - 200ml - sugar
- Orange juice - Glass - no milk
- Water - Bottle - 5L - no sugar
- Peppermint Tea - Mug - 300ml - No milk - no sugar
- Coffee - Captain Haddock Mug - 250ml - Milk - No sugar
- Watermelon Cucumber Water - Bottle - 1L

price = 9.99
total = price + (tax _ price)
total = 9.99 + (9.99 _ 0.14975)
total = 11.4876
total = Math.round(11.4876 \* 100) / 100 => 11.4876 => 1148.76 => 1149 => 11.49

price*in_cents = 999
total = price + (tax * price)
total = 999 + (999 \_ 0.14975)
total = 1148.76
total = Math.round(1148.76)
total = 1149

humanized_money_with_symbol(1149) => 11.49$

CREATE TABLE students (
INT cohort_id REFERENCES cohorts(id) ON DELETE CASCADE
)

1 - User stories

2 - Mockup
2 - ERD

3 - Compare ERD against Mockup

4 - Compare Mockup against ERD

5 - Seed

6 - Routes
6 - Frontend
6 - Db Helpers
