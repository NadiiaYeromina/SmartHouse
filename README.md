# SmartHouse
Фінальний проект міжфак КІ31

Самостійна робота:
Розробити архітектуру програмного забезпечення, яка реалізує моделювання системи управління компонентами "розумного будинку". 
(можна змінити тему на власну)

Вимоги до захисту самостійної роботи:
В системі повинно бути змодельовані як мінімум 3 компоненти "розумного будинку", наприклад світильник, жалюзі, сигналізація, кондиціонер, телевізор,...
Під час розробки слід використовувати об'єктно орієнтовний підхід та всі його можливості. 
Критерії оцінювання:
 використання лише можливостей ECMAScript 5 (до 5 балів);
- оформлення коду (стиль коду) (до 5 балів);
- реалізовано асинхронну функцію за допомогою callback підходу (до 5 балів);
- реалізовано поведінку щонайменше трьох типів об’єктів (до 5 балів);
- використовується прототипний підхід до написання власних типів об’єктів (до 10
балів);
- реалізовані агрегація та/або композиція, наслідування для представлених об’єктів (до 10 балів).

Приклад роботи:
var sh = new SmartHouse("Name1");
sh.addDevice(new Lamp("Lamp1"));
sh.addDevice(new Lamp("Lamp2"));
console.log(sh.getDevices());
console.log(sh.getDeviceByName("Lamp2"));
sh.getDeviceByName("Lamp2").on();
sh.offAllDevice();

План розповіді:
1. Ідея проєкту, Які сутності є + діаграма (UML) з поясненням
2. Що винесли з курсу цікавого та, де це використали в проєкті
3. Демонстрація роботи
4. Реалізація інкапсуляції
5. Реалізація наслідування
6. Реалізація зв'язків (асоціація/агрегація/композиція)
7. Реалізація поліморфізму
8. Реалізація асинхронного методу
9. Власні пункти
