# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "trix"
pin "@rails/actiontext", to: "actiontext.esm.js"
pin "tom-select" # @2.3.1
pin "@rails/request.js", to: "@rails--request.js.js" # @0.0.11
pin "inputmask" # @5.0.9
pin "flatpickr" # @4.6.13
