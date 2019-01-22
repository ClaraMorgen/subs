MoneyRails.configure do |config|
  config.default_currency = :eur  # or :gbp, :usd, etc.
  config.no_cents_if_whole = false
  Money.locale_backend = nil
end
