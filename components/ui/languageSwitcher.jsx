import { Combobox } from "@headlessui/react";

const languages = [
  { key: "en", src: "/assets/english.png" },
  { key: "es", src: "/assets/spanish.png" },
  { key: "de", src: "/assets/german.png" },
  { key: "pt", src: "/assets/portuguese.png" },
];

const LanguageSwitcher = ({ locale, setLocale }) => {
  const selected =
    languages.find((lang) => lang.key === locale) || languages[0];

  return (
    <Combobox value={selected} onChange={(lang) => setLocale(lang.key)}>
      <div className="relative w-16">
        {/* Main Button */}
        <Combobox.Button
          as="button"
          className="w-full flex items-center gap-2 p-1 mt-1.5 rounded-md bg-bg dark:bg-bg-dark text-text dark:text-text-dark cursor-pointer"
        >
          <img
            src={selected.src}
            alt={selected.key}
            className="w-6 h-6 object-cover"
          />
          <span className="uppercase">{selected.key}</span>
        </Combobox.Button>

        {/* Options */}
        <Combobox.Options
          as="ul"
          className="absolute mt-1 w-full max-h-60 overflow-auto bg-bg dark:bg-bg-dark border border-muted-dark dark:border-muted rounded-md shadow-lg z-10"
        >
          {languages.map((lang) => (
            <Combobox.Option
              key={lang.key}
              as="li"
              value={lang}
              className={({ active, selected }) =>
                `cursor-pointer p-1 flex items-center gap-2 ${
                  active
                    ? "bg-accent text-white"
                    : "text-text dark:text-text-dark"
                } ${selected ? "font-semibold" : ""}`
              }
            >
              <img
                src={lang.src}
                alt={lang.key}
                className="w-6 h-6 object-cover"
              />
              <span className="uppercase">{lang.key}</span>
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};

export default LanguageSwitcher;
