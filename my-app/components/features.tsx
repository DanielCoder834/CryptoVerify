import { Shield, Zap, Coins } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Collateral",
    description: "Your crypto assets remain safely stored and fully insured throughout the loan period.",
  },
  {
    icon: Zap,
    title: "Instant Approval",
    description: "Get your loan approved and funds transferred within minutes, not days.",
  },
  {
    icon: Coins,
    title: "Competitive Rates",
    description: "Enjoy low interest rates and flexible repayment terms tailored to your needs.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Horizon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

