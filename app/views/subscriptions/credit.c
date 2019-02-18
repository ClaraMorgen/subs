#include <stdio.h> // input ouput
#include <cs50.h>

int main(void)
{
  long card = get_long("give number:\n");
  long card_2 = card;
  long card_3 = card;
  int check_1;
  string card_t;
  int check_2;
  int sum = 0;

  card_2 /= 10; // 400360000000001.4
  while(card_2)
    {
        check_2 = card_2 % 100; // 01 gives back two digits at the time
        int product = check_2 % 10 * 2; // take first of the two digits and mulitply by 2
//         printf("product: %i\n", product);
        if (product > 9)
        {
            sum += 1;
            sum += product % 10;
        }
        else
        {
            sum += product;
        }
        card_2 /= 100;
    }
   printf("%i", sum);

   while(card_3)
   {
       int check_3 = card_3 % 100; // 4003600000000014 two last digits
       sum += check_3 % 10; // 4
       card_3 /= 100;
   }
     printf("sum_2: %i\n", sum);
     if (sum % 10 == 0)
     {
         while(card)
       {
      card /= 10;
      check_1 = card % 100;
        if (card == 4)
        {
            card_t = "VISA\n";
        }
        else if (check_1 == 51 || check_1 == 52 || check_1 == 53 || check_1 == 54 || check_1 == 55 )
        {
            card_t = "MASTERCARD\n";
        }
        else if (check_1 == 34 || check_1 == 37 )
        {
            card_t = "AMEX\n";
        }
//          else
//              {
//                  card_t = "INVALID\n";
//              }
         }
         printf("%s", card_t);

     }
    else
    {
        string invalid = "INVALID\n";
        printf("%s", invalid );
    }
}
