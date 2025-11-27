import { cn } from '@/lib/utils';
import { Button } from './button';
import { CheckmarkIcon } from './icons/checkmark-icon';

type MembershipOption = {
  id: string;
  name: string;
  price: string;
  period: 'month' | 'year' | null;
  benefits: string[];
  isFeatured: boolean;
};

export function MembershipSection() {
  const membershipOptions: MembershipOption[] = [
    {
      id: 'opt-1',
      name: 'Starter',
      price: '19',
      period: 'month',
      benefits: ['1 book/month', 'Online forums'],
      isFeatured: false
    },
    {
      id: 'opt-2',
      name: 'Pro',
      price: '29',
      period: 'month',
      benefits: ['2 books/month', 'Virtual meetups'],
      isFeatured: true
    }
  ];

  return (
    <section
      id="membership-options-section"
      className="xl:px-24"
      aria-labelledby="membership-options-heading"
    >
      <h2
        id="membership-options-heading"
        className="text-preset-2 text-neutral-900 pb-6 md:pb-10 xl:pb-16 xl:text-center"
      >
        Membership options
      </h2>
      <div className="grid items-center md:grid-cols-2 xl:grid-cols-[1fr_21.875rem_1fr] gap-6">
        {membershipOptions.map((opt) => (
          <MembershipOption key={opt.id} {...opt} />
        ))}
        <CustomMembershipOption />
      </div>
    </section>
  );
}

function MembershipOption({
  name,
  price,
  period,
  benefits,
  isFeatured = false
}: MembershipOption) {
  return (
    <div
      className={cn(
        'p-6 border border-neutral-200 rounded-lg',
        isFeatured && 'featured-membership xl:py-10'
      )}
    >
      <div className="space-y-6 pb-6 mb-6 border-b border-neutral-200">
        <h3 className="text-preset-4 text-neutral-900">{name}</h3>
        <div className="flex gap-2 items-center">
          <strong
            className="text-preset-3 text-neutral-900"
            style={{ fontSize: '34px' }}
            aria-label={`${price} dollars per ${period}`}
          >
            ${price}
          </strong>
          <span
            className="text-preset-5-regular text-neutral-700"
            aria-hidden="true"
          >
            {period && `/${period}`}
          </span>
        </div>
      </div>
      <MembershipBenefits benefits={benefits} />
      <Button
        className="w-full"
        aria-label={`Subscribe to ${name} membership plan`}
      >
        Subscribe now
      </Button>
    </div>
  );
}

function CustomMembershipOption() {
  return (
    <div className="p-6 border border-neutral-200 rounded-lg">
      <div className="space-y-6 pb-6 mb-6 border-b border-neutral-200">
        <h3 className="text-preset-4 text-neutral-900">Enterprise</h3>
        <strong
          className="text-preset-3 text-neutral-900"
          style={{ fontSize: '34px' }}
        >
          Custom
        </strong>
      </div>
      <MembershipBenefits benefits={['Team access', 'Private sessions']} />
      <Button className="w-full">Talk to us</Button>
    </div>
  );
}

function MembershipBenefits({ benefits }: Pick<MembershipOption, 'benefits'>) {
  return (
    <ul className="space-y-4 mb-8">
      {benefits.map((benefit) => (
        <li key={benefit} className="flex items-center gap-3">
          <CheckmarkIcon />
          <span className="text-preset-5-regular text-neutral-700">
            {benefit}
          </span>
        </li>
      ))}
    </ul>
  );
}
