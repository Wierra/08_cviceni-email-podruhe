E-mail podruhé
Pojďme dále rozvinout cvičení s vyplňováním e-mailu z předchozí lekce.

Vytvořte si repozitář ze šablony cviceni-email-podruhe.
Všimněte si funkce goodbye, která generuje pozdrav na konec e-mailu. Přidejte alespoň dvě další funkce, kde každá generuje k zadanému jménu jiný typ pozdravu. Například formalGoodbye pro velmi formální pozdravy jako „S uctivou poklonou…“, nebo naopak rudeGoodbye typu „Se měj…“, pokud se chcete rozloučit nevybíravě.
Upravte funkci fillBody tak, aby brala třetí parametr goodbyeFunction představující funkci, pomocí které se má vygenerovat závěrečný pozdrav. Vyzkoušejte zavolat funkci fillBody postupně s každou z vašich zdravících funkcí a ověřte, že vše správně funguje.
Ukázka použití
    fillSubject('Obchodní sdělení');
    fillBody(
      'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
      'Jan Čistý',
      formalGoodbye
    );
nebo

    fillSubject('Pozvánka na oslavu narozenin');
    fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodbye);
