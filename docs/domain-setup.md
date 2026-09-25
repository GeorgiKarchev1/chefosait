# Домейн и публикуване

- Основен адрес: https://sdmc.bg
- Vercel проект: `chefosait` в `georgikarchev1s-projects`.
- Добавени домейни: `sdmc.bg` и `www.sdmc.bg`.
- `www.sdmc.bg` се пренасочва с HTTP 308 към `sdmc.bg`, със запазване на пътя и параметрите.
- Основният URL за canonical, Open Graph, sitemap и robots е в `src/lib/site.ts`.
- Production версията е публикувана успешно и проверена на https://chefosait.vercel.app.
- Deployment: https://vercel.com/georgikarchev1s-projects/chefosait/3z8a6fpbCxfLFRnm9JdbMEM9ooUY, статус `READY`, с двата домейна като aliases.
- Проверката на публичната версия потвърди 66 одобрени текстови блока, съкратения hero и липсата на бутон под услугите. Надписът над заглавието и лентата с предимства са премахнати по искане на клиента.
- Оригиналните шест бележки остават непроменени в `chefotextove.md` и `src/content/notes.json`. Одобрените редакции за сайта са в `src/content/site-copy.json`.

## DNS

На 25.09.2026 г. SuperHosting прие заявка за смяна на DNS сървърите:

| Предишни | Нови |
| --- | --- |
| `ns301.superhosting.bg` | `ns1.vercel-dns.com` |
| `ns302.superhosting.bg` | `ns2.vercel-dns.com` |

Преди промяната и двата предишни DNS сървъра връщаха `REFUSED` за домейна. Vercel обслужва новата DNS зона с автоматични ALIAS и CAA записи.

SuperHosting посочва до 30 минути за обработка на заявката, след което DNS обновяването може да отнеме 2–48 часа. Заявката е приета; това само по себе си не потвърждава разпространението или издаването на HTTPS сертификат.

Последна проверка: 25.09.2026 г., 14:03 ч. (Europe/Sofia). Директната заявка към регистъра `a.nic.bg` все още връща старите DNS сървъри. Новата зона отговаря от сървърите на Vercel, но смяната на делегацията още не е приложена. Поради това `sdmc.bg` и `www.sdmc.bg` продължават да показват `Invalid Configuration` във Vercel.

## Проверка и публикуване

```sh
npm run lint
npm run build
npm run check:notes
npx --yes vercel@latest deploy --prod --yes --scope georgikarchev1s-projects
```

`check:notes` по подразбиране проверява `http://127.0.0.1:3001`. За проверка на публикувания сайт:

```sh
npm run check:notes -- https://sdmc.bg
```

Контактът е само по телефон на `+359 897 606 676`, предоставен от клиента на 25.09.2026 г. Номерът присъства в навигацията, hero секцията, след „Как работим“, в контактите и във футъра. Всички връзки за обаждане използват `tel:+359897606676`. Имейлът е премахнат и от страницата, и от структурираните данни.
